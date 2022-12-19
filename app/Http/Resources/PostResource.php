<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //padrao
        //return parent::toArray($request);

        return [
            'name' => $this->title,
            'date' => Carbon::parse($this->created_at)->format('d/m/Y H:i:s')
        ];
    }
}
