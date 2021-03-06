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
 * @interface CueCueNumberTextFormatBackgroundColorRequest
 */
export interface CueCueNumberTextFormatBackgroundColorRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatBackgroundColorRequest
     */
    red?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatBackgroundColorRequest
     */
    green?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatBackgroundColorRequest
     */
    blue?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberTextFormatBackgroundColorRequest
     */
    alpha?: string;
}

export function CueCueNumberTextFormatBackgroundColorRequestFromJSON(json: any): CueCueNumberTextFormatBackgroundColorRequest {
    return CueCueNumberTextFormatBackgroundColorRequestFromJSONTyped(json, false);
}

export function CueCueNumberTextFormatBackgroundColorRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberTextFormatBackgroundColorRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'red': !exists(json, 'red') ? undefined : json['red'],
        'green': !exists(json, 'green') ? undefined : json['green'],
        'blue': !exists(json, 'blue') ? undefined : json['blue'],
        'alpha': !exists(json, 'alpha') ? undefined : json['alpha'],
    };
}

export function CueCueNumberTextFormatBackgroundColorRequestToJSON(value?: CueCueNumberTextFormatBackgroundColorRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'red': value.red,
        'green': value.green,
        'blue': value.blue,
        'alpha': value.alpha,
    };
}

