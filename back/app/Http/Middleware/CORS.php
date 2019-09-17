<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
            ->header('Acces-Control-Allow-Origin', 'http://localhost:3000')
            ->header('Acces-Control-Allow-Methods', 'GET, PUT, PATCH, POST, DELETE, OPTIONS')
            ->header('Acces-Control-Allow-Headers', 'X-Requested-With, Content-Type')
            ->header('Acces-Control-Allow-Credentials', 'true');
     }
}
