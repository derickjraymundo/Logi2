<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name(name: 'index');
Route::get('/register', [HomeController::class, 'register'])->name(name: 'register');
Route::get('/login', [HomeController::class, 'login'])->name('login');
Route::get('/forgot-password', [HomeController::class, 'forgotpassword'])->name(name: 'forgot-password');
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});