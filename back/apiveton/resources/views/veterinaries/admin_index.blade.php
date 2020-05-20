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
    <p class="parrafo_index">Administrador: Verificá que los datos de las veterinarias sean verdaderos y procedé a registrarlas o rechazarlas</p>
    <h2 class="subtitulo_index">Veterinarias Pendientes de Aprobación</h2>
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
            @foreach($veterinaries as $veterinary)
                <form action="{{ url('veterinaries/guardar') }}" method="post" class="veterinary-form-aceptar">
                    @csrf
                    @method('POST')

                <tr>
                    <td>{{ $veterinary->id_veterinary }}<input type="hidden" value="{{$veterinary->id_veterinary}}" name="id_veterinary"></td>
                    <td>{{ $veterinary->id_user }}<input type="hidden" value="{{$veterinary->id_user}}" name="id_user"></td>
                    <td>{{ $veterinary->business_name }}<input type="hidden" value="{{$veterinary->business_name}}" name="business_name"></td>
                    <td>{{ $veterinary->fantasy_name }}<input type="hidden" value="{{$veterinary->fantasy_name}}" name="fantasy_name"></td>
                    <td>{{ $veterinary->cuit_cuil }}<input type="hidden" value="{{$veterinary->cuit_cuil}}" name="cuit_cuil"></td>
                    <td>{{ $veterinary->phone1 }}<input type="hidden" value="{{$veterinary->phone1}}" name="phone1"></td>
                    <td>{{ $veterinary->phone2 }}<input type="hidden" value="{{$veterinary->phone2}}" name="phone2"></td>
                    <td>{{ $veterinary->street }}<input type="hidden" value="{{$veterinary->street}}" name="street"></td>
                    <td>{{ $veterinary->between_streets }}<input type="hidden" value="{{$veterinary->between_streets}}" name="between_streets"></td>
                    <td class="celda_acciones">
                        <button class="icono_aceptar">Aceptar Veterinaria</button>
                </form>
                        <form action="{{ url('veterinaries/' . $veterinary->id_veterinary . '/eliminar') }}" method="post" class="veterinary-form-eliminar">
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
            const formsAceptar = document.querySelectorAll('.veterinary-form-aceptar');

            for(let i = 0; i < formsEliminar.length; i++) {
                formsEliminar[i].addEventListener('submit', function(ev) {
                    if(!confirm('Estás seguro que querés borrar esta veterinaria?')) {
                        ev.preventDefault();
                    }
                });
            }

            for(let i = 0; i < formsAceptar.length; i++) {
                formsAceptar[i].addEventListener('submit', function(ev) {
                    if(!confirm('Estás seguro que querés aceptar esta veterinaria?')) {
                        ev.preventDefault();
                    }
                });
            }
        });
    </script>
@endsection
