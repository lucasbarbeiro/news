<?php

use App\Events\PostCreated;
use App\Http\Controllers\SiteController;
use App\Models\User; //importa o model User (tabela de usuarios)
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

/*
criação de post direto na rota
*/

Route::get('/create-post', function () {
    $user = User::first();

    //a rotina foi encapsulada na variavel $post para chamar o evento/listener
    $post = $user->posts()->create([
        'title' => Str::random(50),
        'body'  => Str::random(100),
    ]);

    //helper que chama o evento e listener
    //event(new PostCreated($post));  este metodo tem que ser chamado em todos lugares do código
    //para evitar isso é utilizado um observer

    return 'ok, post criado';
});

Route::get('/', [SiteController::class, 'index']);
