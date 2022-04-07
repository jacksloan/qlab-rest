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
 * @interface CueCueNumberSliceMarkerRequest
 */
export interface CueCueNumberSliceMarkerRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkerRequest
     */
    index?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkerRequest
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkerRequest
     */
    playCount?: string;
}

export function CueCueNumberSliceMarkerRequestFromJSON(json: any): CueCueNumberSliceMarkerRequest {
    return CueCueNumberSliceMarkerRequestFromJSONTyped(json, false);
}

export function CueCueNumberSliceMarkerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliceMarkerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': !exists(json, 'index') ? undefined : json['index'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'playCount': !exists(json, 'play_count') ? undefined : json['play_count'],
    };
}

export function CueCueNumberSliceMarkerRequestToJSON(value?: CueCueNumberSliceMarkerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
        'time': value.time,
        'play_count': value.playCount,
    };
}

