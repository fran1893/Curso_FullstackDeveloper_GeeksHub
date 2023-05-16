<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpParser\Node\Stmt\TryCatch;

class TaskController extends Controller
{
    public function createTask(Request $request)
    {
        try {
            $title = $request->input("title");
            $description = $request->input("description");
            $userId = $request->input("user_id");
            // $status = $request->input("status");

            $validator = Validator::make($request->all(), [
                'title' => 'required|string|max:10',
                'description' => 'required',
                'user_id' => 'required'
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
            return response()->json([
                "success" => false,
                "message" => "error creating task",
                "error" => $th->getMessage()
            ], 500);
        }
    }


    public function getTask($id)
    {
        try {
            $tasks = Task::query()
                ->where('user_id', '=', $id)
                ->get()
                ->toArray();

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

    public function updateTask($id)
    {
        return 'Update Task with id: ' . $id;
    }

    public function deleteTask($id)
    {
        try {
            $task = Task::query()
                ->where("id", "=", $id)
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
