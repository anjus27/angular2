<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SharesController extends Controller
{
    public function index()
    {
        $title="abc";
       // return ("This is my index page");
       return view('shares.about')->with('name',$title);
    }
     public function contact()
    {
       // return ("This is my index page");
       return view('shares.contact');
    }
     public function service()
    {
       // return ("This is my index page");
       return view('shares.service');
    }
}
