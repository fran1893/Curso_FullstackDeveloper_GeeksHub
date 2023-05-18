<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\TryCatch;

class TaskController extends Controller
{
    public function createTask(Request $request)
    {
        try {
            Log::info("Creating task");

            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:10',
                'description' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(
                    [
                        'success' => true,
                        'message' => "Body validation error",
                        'errors' => $validator->errors()
                    ],
                    400
                );
            }
            $userId = auth()->user()->id;
            $title = $request->input("title");
            $description = $request->input("description");

            // $status = $request->input("status");
            // // insert usiing query builder
            // $newTask = DB::table('tasks')->insert([
            //     'title' => $title,
            //     'description' => $description,
            //     "user_id" => $userId,
            //     // "status" => $status
            // ]);

            // insert with elocuent opcion A
            $newTask = new Task();
            $newTask->title = $title;
            $newTask->description = $description;
            $newTask->user_id = $userId;
            $newTask->save();


            return response()->json([
                "success" => true,
                "message" => "create task successfully",
                "data" => $newTask
            ], 201);
        } catch (\Throwable $th) {

            Log::alert($th->getMessage());

            return response()->json([
                "success" => false,
                "message" => "error creating task",
                "error" => $th->getMessage()
            ], 500);
        }
    }


    public function getTask()
    {
        try {
            $userId = auth()->user()->id;

            // $tasks = Task::query()
            //     ->where('user_id', '=', $userId)
            //     ->get();

            $tasks = User::query()
                ->find($userId)
                ->tasks;

            return response()->json([
                "success" => true,
                "message" => "Get tasks successfully",
                "data" => $tasks
            ], 201);
        } catch (\Throwable $th) {

            return response()->json([
                "success" => false,
                "message" => "error creating task",
                "error" => $th->getMessage()
            ], 500);
        }
    }

    public function updateTask(Request $request, $id)
    {
        try {

            Log::info("update task");

            $validator = Validator::make($request->all(), [
                'title' => 'string|max:10',
                'description' => 'string',
                'status' => "in:progress,finished"
            ]);

            if ($validator->fails()) {
                return response()->json(
                    [
                        'success' => true,
                        'message' => "Body validation error",
                        'errors' => $validator->errors()
                    ],
                    400
                );
            }

            $task = Task::find($id);

            if (!$task) {
                return response()->json(
                    [
                        'success' => true,
                        'message' => "task doesnt exits",
                        'errors' => $validator->errors()
                    ],
                    404
                );
            }

            $title = $request->input('title');
            $description = $request->input('description');
            $status = $request->input('status');

            if (isset($title)) {
                $task->title = $request->input('title');
            }

            if (isset($description)) {
                $task->description = $request->input('description');
            }

            if (isset($status)) {
                $task->status = $request->input('status');
            }



            $task->save();

            return response()->json([
                "success" => true,
                "message" => "Updated task successfully",
                "data" => $task
            ], 201);
        } catch (\Throwable $th) {
            Log::alert($th->getMessage());

            return response()->json([
                "success" => false,
                "message" => "error updating task",
                "error" => $th->getMessage()
            ], 500);
        }
    }

    public function deleteTask($id)
    {
        try {
            $userId = auth()->user()->id;

            $task = Task::query()
                ->where("id", "=", $id)
                ->where('user_id', '=', $userId)
                ->first();

            if (!$task) {

                return response()->json([
                    "success" => true,
                    "message" => "Task doesnt exists",
                ], 404);
            }

            $tasksDeleted = Task::destroy($id);

            return response()->json([
                "success" => true,
                "message" => "Deleted task successfully",
                "data" => $tasksDeleted
            ], 201);
        } catch (\Throwable $th) {

            return response()->json([
                "success" => false,
                "message" => "error deleting task",
                "error" => $th->getMessage()
            ], 500);
        }
    }
}
