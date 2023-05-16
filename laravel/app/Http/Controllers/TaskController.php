<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;
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

            // // TODO Validaciones

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

    public function getTask()
    {
        return "Get Tasks";
    }

    public function updateTask($id)
    {
        return 'Update Task with id: ' . $id;
    }

    public function deleteTask($id)
    {
        return 'Delete Task with id: ' . $id;
    }
}
