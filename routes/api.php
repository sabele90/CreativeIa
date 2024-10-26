<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\TextGenerationController;

Route::post('/generate-text', [TextGenerationController::class, 'generateText']);
Route::get('/history', [TextGenerationController::class, 'getHistory']);
