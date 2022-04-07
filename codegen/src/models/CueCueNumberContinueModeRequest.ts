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
 * @interface CueCueNumberContinueModeRequest
 */
export interface CueCueNumberContinueModeRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberContinueModeRequest
     */
    number?: string;
}

export function CueCueNumberContinueModeRequestFromJSON(json: any): CueCueNumberContinueModeRequest {
    return CueCueNumberContinueModeRequestFromJSONTyped(json, false);
}

export function CueCueNumberContinueModeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberContinueModeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberContinueModeRequestToJSON(value?: CueCueNumberContinueModeRequest | null): any {
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

