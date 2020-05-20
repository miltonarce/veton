<!doctype html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="shortcut icon" type="image/x-icon" href="{{ url('recursos/favicon.png') }}"/>
    <link rel="stylesheet" href="{{ url('css/app.css') }}">
    <link rel="stylesheet" href="{{ url('css/estilos.css') }}">
    <link rel="stylesheet" href="{{ url('css/fuentes.css') }}">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a id="navbar_titulo" class="navbar-brand" href="{{ url('/') }}">VetOn</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="{{ url('/veterinaries') }}">Veterinarias pendientes de aprobación</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="{{ url('/veterinaries/list') }}">Veterinarias Registradas</a>
            </li>
            <li id="link_sesion" class="nav-item">
                <a class="nav-link" href="{{ url('/') }}">(Cerrar Sesión)</a>
            </li>
        </ul>
    </div>
</nav>
<div class="wrapper">
    <main class="main-content container">
        <?php
        // Acá queremos volcar el contenido
        // Para "ceder" (yield) un espacio del template a otros templates,
        // usamos la directiva "yield", con el nombre de la secció entre
        // ().
        ?>
        @yield('main')
    </main>

    @yield('aside')

</div>
<footer class="main-footer">
    <p>Vet On</p>
</footer>

@yield('scripts')
</body>
</html>
