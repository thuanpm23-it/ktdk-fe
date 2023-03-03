<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    //
    function addProduct(Request $req)
    {
        $product = new Product;
        $product->pro_name = $req->input('pro_name');
        $product->pro_desc = $req->input('pro_desc');
        $product->image = $req->file('image')->store('products');
        $product->price = $req->input('price');
        $product->category = $req->input('category');
        $product->save();
        return $product;
    }
    function list()
    {
        return Product::all();
    }
    function delete($id)
    {
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "product has been delete"];
        } else {
            return ["result" => "Operation failed"];
        }
    }
    function getProduct($id)
    {
        return Product::find($id);
    }
    function updateProduct($id, Request $req)
    {
        $product = Product::find($id);
        $product->pro_name = $req->input('pro_name');
        $product->pro_desc = $req->input('pro_desc');
        $product->price = $req->input('price');
        $product->category = $req->input('category');
        if ($req->file('image')) {
            $product->image = $req->file('image')->store('products');
        }

        $product->save();
        return $product;
    }
    function search($key)
    {
        return Product::where('pro_name', 'Like', "%$key%")->get();
    }
}
