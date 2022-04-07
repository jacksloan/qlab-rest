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
 * @interface CueCueNumberDeleteSliceMarkerRequest
 */
export interface CueCueNumberDeleteSliceMarkerRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDeleteSliceMarkerRequest
     */
    index?: string;
}

export function CueCueNumberDeleteSliceMarkerRequestFromJSON(json: any): CueCueNumberDeleteSliceMarkerRequest {
    return CueCueNumberDeleteSliceMarkerRequestFromJSONTyped(json, false);
}

export function CueCueNumberDeleteSliceMarkerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberDeleteSliceMarkerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'index': !exists(json, 'index') ? undefined : json['index'],
    };
}

export function CueCueNumberDeleteSliceMarkerRequestToJSON(value?: CueCueNumberDeleteSliceMarkerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'index': value.index,
    };
}
