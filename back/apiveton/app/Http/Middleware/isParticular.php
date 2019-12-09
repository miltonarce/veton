<?php

namespace App\Http\Middleware;

use Closure;

class isParticular
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
        if($user->id_role !== 4) {
            return response()->json(['error' => 'No podés estar acá.'], 401);
        }

        return $next($request);
    }
}
