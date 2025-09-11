<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'images.*' => 'required|image|mimes:jpeg,png,webp,avif|max:5120',
        ]);

        $uploaded = [];

        foreach ($request->file('images') as $image) {
            $path = $image->store('images', 'public');
            $uploaded[] = [
                'filename' => $image->getClientOriginalName(),
                'path' => $path,
                'url' => Storage::url($path),
            ];
        }

        return response()->json([
            'message' => 'Images uploaded successfully',
            'files' => $uploaded,
        ]);
    }
}
