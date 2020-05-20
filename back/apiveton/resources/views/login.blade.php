@extends('layouts.main')

<?php /*
@section('title')
Página Principal
@endsection
 */ ?>
@section('title', 'Iniciar Sesión')

<?php
// Luego, debemos indicar en qué sección del template (las
// indicadas con yield) queremos que el contenido se agregue.
// Esto se logra usando la directiva @section(nombre) y
// cerrando con @endsection
?>
@section('main')
    <h1>Iniciar Sesión</h1>
    <p>Completá los datos del formulario para iniciar sesión :)</p>

    @if(Session::has('message'))
        <div class="alert alert-danger">{{ Session::get('message') }}</div>
    @endif

    <form action="<?= url('/');?>" method="post">
        @csrf
        <div class="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" class="form-control" value="<?= old('email');?>">
            @if($errors->has('email'))
                <div class="alert alert-danger">{{ $errors->first('email') }}</div>
            @endif
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" class="form-control">
            @if($errors->has('password'))
                <div class="alert alert-danger">{{ $errors->first('password') }}</div>
            @endif
        </div>
        <button class="btn btn-primary btn-block">Ingresar</button>
    </form>
@endsection
