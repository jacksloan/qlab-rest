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
 * @interface CueCueNumberLiveScaleRequest
 */
export interface CueCueNumberLiveScaleRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveScaleRequest
     */
    x?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveScaleRequest
     */
    y?: string;
}

export function CueCueNumberLiveScaleRequestFromJSON(json: any): CueCueNumberLiveScaleRequest {
    return CueCueNumberLiveScaleRequestFromJSONTyped(json, false);
}

export function CueCueNumberLiveScaleRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLiveScaleRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
    };
}

export function CueCueNumberLiveScaleRequestToJSON(value?: CueCueNumberLiveScaleRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'x': value.x,
        'y': value.y,
    };
}

