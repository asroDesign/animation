<?php

namespace App\Http\Resources;
use Illuminate\Http\Resources\Json\JsonResource;

class StageResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'stage_type' => $this->stage_type,
            'requires_payment' => $this->requires_payment,
            'type' => $this->whenLoaded('typed', function () {
                $data = $this->typed->toArray();
                if ($this->stage_type === 'form') {
                    $data['fields'] = $this->typed->fields;
                }
                return $data;
            }),
            'formResponses' => $this->whenLoaded('formResponses', fn () => $this->formResponses),
        ];
    }
}
