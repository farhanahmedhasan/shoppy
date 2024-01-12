<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(){
        return Inertia::render('auth/AuthRegister');
    }

    public function store(StoreUserRequest $request){
        $attributes = $request->validate();
    }
}
