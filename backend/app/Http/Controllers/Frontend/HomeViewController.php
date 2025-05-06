<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Frontend\{ProductCategory,ProductSubCategory,Product,Page,Testimonial,Wishlist,HomeContent};
use App\Models\{Admin\Blog, Admin\BlogCategory, Order, OrderProduct, Country, VendorRequest};
use Auth, Session, Redirect, DB;
use Carbon\Carbon;

class HomeViewController extends Controller
{
	/**
     * Home index Page.
     */
	public function index()
	{
		$user = Auth::user();
		//get featured category
        $data['featured_category'] = ProductCategory::where(['is_featured'=>1,'is_active'=>1])->get();
        $data['animation_category'] = ProductSubCategory::where(['is_featured'=>1,'is_active'=>1,'category_id'=>2])->get();
		//get random order products
		$data['products'] = Product::where(['is_active'=>1])->whereNotNull('published_at')->inRandomOrder()->take(12)->get();
		//get featured order products
		$data['featured_products'] = Product::where(['is_featured'=>1,'is_active'=>1])->whereNotNull('published_at')->inRandomOrder()->take(6)->get();

		$home_section = new HomeContent(); //for home content
		$data['why_choose_us'] = $home_section->where(['is_active'=>1,'type'=>'WhyChooseSection'])->get();
		$data['start_section'] = $home_section->where(['is_active'=>1,'type'=>'StartSection'])->get();
        $data['process_step_section'] = $home_section->where(['is_active'=>1,'type'=>'process_step_section'])->get();
		return response()->json($data);
	}

    public function portfolio(Request $request){
        return response()->json(Product::where(['is_active'=>1,'category_id'=>$request['cat_id']])
            //->whereNotNull('published_at')
            ->inRandomOrder()->take(8)->get());
    }

    public function testimonials(){
        return response()->json(Testimonial::inRandomOrder()->where(['is_active'=>1])->take(5)->get());
    }

    public function service_view($slug){
        return response()->json(ProductSubCategory::where(['is_active'=>true,'slug'=>$slug])->first());
    }
    public function getConfigs (){
        return response()->json(getSetting());
    }

	/* user reset password page */
	public function reset_password_view(request $request)
	{
		$data['token'] = $request->token;
		return view('frontend.reset-password', $data);
	}

	/* about us page */
	public function aboutus_view()
	{
		return response()->json(Page::where('slug', 'about-us')->first());
	}
	/* privacy policy page */
	public function privacy_policy_view()
	{
		return response()->json(Page::where('slug', 'privacy-policy')->first());
	}
	/* terms and conditions page */
	public function terms_and_conditions_view()
	{
		return response()->json(Page::where('slug', 'terms-and-conditions')->first());
	}

	/* author terms and conditions page */
	public function author_terms_and_conditions_view()
	{
		return response()->json(Page::where('slug', 'author-terms-and-conditions')->first());
	}



	/* user my profile page */
	public function profile_view()
	{
		$user = Auth::user();
		$data['user'] = $user;
		$data['country'] = Country::orderBy('name', 'ASC')->get();
		$data['vendor_request'] = VendorRequest::where('user_id',$user->id)->first();
		return response()->json($data);
	}
	/* user my wishlist page */
	public function wishlist_view()
	{
		$data['product_items'] = Product::where(['is_active'=>1])->whereNotNull('published_at')->mightAlsoLike()->get();
		$data['wishlist'] = Wishlist::where('user_id',Auth::id())->get();
		return response()->json($data);
	}


    public function blog_list(Request $request){
        $data = Blog::query();
        if (array_key_exists('search',$request->all()) && $request['search']){
            $data->where('heading','like','%'.$request['search'].'%');
        }
        $data = $data->paginate(10);
        return response()->json($data);
    }
    public function blog_view($slug){
        return response()->json(Blog::where('slug',$slug)->first());
    }

    public function blogsCategory(){
        return response()->json(BlogCategory::where(['is_active'=>1])->get());
    }


}
