/* tslint:disable */
/* eslint-disable */
/**
 * QLab OSC Rest Proxy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CueCueNumberSliceMarkerIndexTimeMinusRequest
 */
export interface CueCueNumberSliceMarkerIndexTimeMinusRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkerIndexTimeMinusRequest
     */
    delta?: string;
}

export function CueCueNumberSliceMarkerIndexTimeMinusRequestFromJSON(json: any): CueCueNumberSliceMarkerIndexTimeMinusRequest {
    return CueCueNumberSliceMarkerIndexTimeMinusRequestFromJSONTyped(json, false);
}

export function CueCueNumberSliceMarkerIndexTimeMinusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliceMarkerIndexTimeMinusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
    };
}

export function CueCueNumberSliceMarkerIndexTimeMinusRequestToJSON(value?: CueCueNumberSliceMarkerIndexTimeMinusRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delta': value.delta,
    };
}
