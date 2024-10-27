<?php

namespace App\Services;

use Illuminate\Support\Str;

class TextGeneratorService
{
    public function generate($prompt, $maxLength, $temperature)
    {

        $introductions = config('introductionText.introductions');
        $responses = config('generatedText.responses');

        if ($maxLength <= 10) {
            $lengthType = 'short';
        } elseif ($maxLength <= 500) {
            $lengthType = 'medium';
        } else {
            $lengthType = 'long';
        }

        if ($temperature < 0.5) {
            $selectedResponses = $responses['low'][$lengthType];
        } elseif ($temperature == 0.5) {
            $selectedResponses = $responses['medium'][$lengthType];
        } else {
            $selectedResponses = $responses['high'][$lengthType];
        }

        $aleatoryResponse = $selectedResponses[array_rand($selectedResponses)];
        $aleatoryIntroductions = $introductions[array_rand($introductions)];

        return Str::limit($aleatoryIntroductions . ' ' . $prompt . ' ' . $aleatoryResponse, $maxLength);
    }
}
