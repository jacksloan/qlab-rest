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
 * @interface CueCueNumberSliceMarkerIndexPlayCountRequest
 */
export interface CueCueNumberSliceMarkerIndexPlayCountRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkerIndexPlayCountRequest
     */
    playCount?: string;
}

export function CueCueNumberSliceMarkerIndexPlayCountRequestFromJSON(json: any): CueCueNumberSliceMarkerIndexPlayCountRequest {
    return CueCueNumberSliceMarkerIndexPlayCountRequestFromJSONTyped(json, false);
}

export function CueCueNumberSliceMarkerIndexPlayCountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliceMarkerIndexPlayCountRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playCount': !exists(json, 'play_count') ? undefined : json['play_count'],
    };
}

export function CueCueNumberSliceMarkerIndexPlayCountRequestToJSON(value?: CueCueNumberSliceMarkerIndexPlayCountRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'play_count': value.playCount,
    };
}

