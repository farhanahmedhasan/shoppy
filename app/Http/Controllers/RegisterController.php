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
        return dd($request->all());
    }
}
