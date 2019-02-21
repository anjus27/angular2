<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/form', function () {
    return view('form');
});
Route::get('/hello', function () {
    return "<h1>hi abc </h1>";
});
Route::get('/users/{id}', function ($id) {
    return 'hi my id is'.$id;
});
Route::get('/about', function () {
    return view('shares.about');
});
Route::get('/index', 'SharesController@index');
Route::get('/contact', 'SharesController@contact');
Route::get('/service', 'SharesController@service');
Route::resource('/book', 'BooksController');
Route::get('/sample', 'BooksController@sample');


Route::get('/create', function () {
    return view('book.books');
});
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
