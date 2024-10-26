<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

Route::get('/register', [HomeController::class, 'register'])->name(name: 'register');
Route::get('/', [HomeController::class, 'dashboard'])->name('dashboard');
Route::get('/logins', [HomeController::class, 'login'])->name('login');
Route::get('/forgot-passwords', [HomeController::class, 'forgotpassword'])->name(name: 'forgot-password');
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified'
])->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});