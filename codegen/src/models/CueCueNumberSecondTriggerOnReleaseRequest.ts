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
 * @interface CueCueNumberSecondTriggerOnReleaseRequest
 */
export interface CueCueNumberSecondTriggerOnReleaseRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSecondTriggerOnReleaseRequest
     */
    number?: string;
}

export function CueCueNumberSecondTriggerOnReleaseRequestFromJSON(json: any): CueCueNumberSecondTriggerOnReleaseRequest {
    return CueCueNumberSecondTriggerOnReleaseRequestFromJSONTyped(json, false);
}

export function CueCueNumberSecondTriggerOnReleaseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSecondTriggerOnReleaseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
    };
}

export function CueCueNumberSecondTriggerOnReleaseRequestToJSON(value?: CueCueNumberSecondTriggerOnReleaseRequest | null): any {
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

