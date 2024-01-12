<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(){
        return Inertia::render('auth/AuthRegister');
    }

    public function store(Request $request){
        $attributes = $request->validate([
            'username'=> 'required | min:6 | max:24',
            'email' => 'email | required',
            'password' => 'required | min:8 | max:32'
        ]);
    }
}
