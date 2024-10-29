<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PromptHistory;
use App\Services\TextGeneratorService;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class TextGenerationController extends Controller
{
    protected $textGenerator;

    public function __construct(TextGeneratorService $textGenerator)
    {
        $this->textGenerator = $textGenerator;
    }

    public function generateText(Request $request)
    {
        try {

            if (!$request->hasAny(['prompt', 'maxLength', 'temperature'])) {
                return response()->json([
                    'error' => 'Solicitud incompleta',
                    'message' => 'Debe rellenar todos los campos antes de enviar la solicitud.',
                ], 400);
            }
            $validatedData = $request->validate([
                'prompt' => 'required|string',
                'maxLength' => 'required|integer|min:10|max:1000',
                'temperature' => 'required|numeric|min:0.0|max:1.0',
            ], [
                'prompt.required' => 'Debe de escribir un mensaje.',
                'maxLength.required' => 'Debe indicar la longitud máxima de la respuesta.',
                'temperature.required' => 'Debe seleccionar el grado de creatividad.',
            ]);


            $generatedText = $this->textGenerator->generate(
                $validatedData['prompt'],
                $validatedData['maxLength'],
                $validatedData['temperature']
            );

            PromptHistory::create([
                'prompt' => $validatedData['prompt'],
                'generated_text' => $generatedText,
                'max_length' => $validatedData['maxLength'],
                'temperature' => $validatedData['temperature'],
            ]);

            return response()->json([
                'prompt' => $validatedData['prompt'],
                'generated_text' => $generatedText,
            ]);
        } catch (ValidationException $e) {

            return response()->json([
                'error' => 'Validación fallida',
                'messages' => $e->errors(),
            ], 422);
        } catch (\Exception $e) {

            Log::error('Error en la generación de texto: ' . $e->getMessage());

            return response()->json([
                'error' => 'Error interno del servidor',
                'message' => 'Ocurrió un error inesperado durante la generación del texto. Por favor, intenta de nuevo.',
            ], 500);
        }
    }

    public function getHistory()
    {
        $history = PromptHistory::all();
        return response()->json($history);
    }
}
