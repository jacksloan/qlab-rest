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
 * @interface CueCueNumberFullSurfaceRequest
 */
export interface CueCueNumberFullSurfaceRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberFullSurfaceRequest
     */
    number?: string;
}

export function CueCueNumberFullSurfaceRequestFromJSON(json: any): CueCueNumberFullSurfaceRequest {
    return CueCueNumberFullSurfaceRequestFromJSONTyped(json, false);
}

export function CueCueNumberFullSurfaceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberFullSurfaceRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberFullSurfaceRequestToJSON(value?: CueCueNumberFullSurfaceRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
    };
}

