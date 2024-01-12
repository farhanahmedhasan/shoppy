<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'username'=> 'required | min:6 | max:24',
            'email'=> 'required | email',
            'password'=> 'required | min:8 | max:32'
        ];
    }

    public function messages(): array
    {
        return [
            'username.min' => 'Username is too short, must be 6 character long',
        ];
    }
}
