<?php
/** @var \App\Models\VeterinaryPendingApproval[] $veterinaries */
?>
@extends('layouts.main')

@section('title', 'Panel de Administración')

@section('main')
    @if(Session::has('message'))
        <div class="alert alert-success">{{ Session::get('message') }}</div>
    @endif

    <h1 class="titulo_index">PANEL DE ADMINISTRACIÓN</h1>
    <p class="parrafo_index">Administrador: Esta es la lista de las veterinarias que actualmente están registradas en VetOn</p>
    <h2 class="subtitulo_index">Veterinarias Registradas</h2>
    <div class="table-responsive">
        <table class="table table-striped table-bordered">
            <thead>
            <tr>
                <th>ID de la Veterinaria</th>
                <th>ID del Usuario</th>
                <th>Nombre Legal</th>
                <th>Nombre de fantasía</th>
                <th>Cuit/Cuil</th>
                <th>Teléfono 1</th>
                <th>Teléfono 2</th>
                <th>Dirección</th>
                <th>Entre calles</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            @foreach($veterinariesList as $veterinary)
                <tr>
                    <td>{{ $veterinary->id_veterinary }}
                    <td>{{ $veterinary->id_user }}
                    <td>{{ $veterinary->business_name }}
                    <td>{{ $veterinary->fantasy_name }}
                    <td>{{ $veterinary->cuit_cuil }}
                    <td>{{ $veterinary->phone1 }}
                    <td>{{ $veterinary->phone2 }}
                    <td>{{ $veterinary->street }}
                    <td>{{ $veterinary->between_streets }}
                    <td class="celda_acciones">
                        <form action="{{ url('veterinaries/' . $veterinary->id_veterinary . '/eliminarRegistrada') }}" method="post" class="veterinary-form-eliminar">
                        @csrf
                        @method('DELETE')
                            <button class="icono_eliminar">Eliminar</button>
                        </form>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
</div>
    <script>
        window.addEventListener('DOMContentLoaded', function() {
            const formsEliminar = document.querySelectorAll('.veterinary-form-eliminar');

            for(let i = 0; i < formsEliminar.length; i++) {
                formsEliminar[i].addEventListener('submit', function(ev) {
                    if(!confirm('Estás seguro que querés borrar esta veterinaria?')) {
                        ev.preventDefault();
                    }
                });
            }

        });
    </script>
@endsection
