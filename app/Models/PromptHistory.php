<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromptHistory extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'prompt',
        'generated_text',
        'max_length',
        'temperature'
    ];
}
