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
 * response object for /settings/video/surfaces/{surfaceID}
 * @export
 * @interface SettingsVideoSurfacesSurfaceIDResponse
 */
export interface SettingsVideoSurfacesSurfaceIDResponse {
    /**
     * 
     * @type {string}
     * @memberof SettingsVideoSurfacesSurfaceIDResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof SettingsVideoSurfacesSurfaceIDResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof SettingsVideoSurfacesSurfaceIDResponse
     */
    data?: object;
}

export function SettingsVideoSurfacesSurfaceIDResponseFromJSON(json: any): SettingsVideoSurfacesSurfaceIDResponse {
    return SettingsVideoSurfacesSurfaceIDResponseFromJSONTyped(json, false);
}

export function SettingsVideoSurfacesSurfaceIDResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsVideoSurfacesSurfaceIDResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function SettingsVideoSurfacesSurfaceIDResponseToJSON(value?: SettingsVideoSurfacesSurfaceIDResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'address': value.address,
        'data': value.data,
    };
}
