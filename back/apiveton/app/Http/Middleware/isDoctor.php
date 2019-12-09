<?php

namespace App\Http\Middleware;

use Closure;

class isDoctor
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = auth()->user();
        if($user->id_role !== 3) {
            return response()->json(['error' => 'No podés estar acá.'], 401);
        }

        return $next($request);
    }
}
