<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SharesController extends Controller
{
    public function index()
    {
        $title="abc";
        return view('shares.about')->with('name',$title);
        
    }
    public function contact()
    {
        return view('shares.contact');
    }
    public function service()
    {
        return view('shares.service');
    }
}
