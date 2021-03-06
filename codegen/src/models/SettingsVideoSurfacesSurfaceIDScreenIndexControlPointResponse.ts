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
 * response object for /settings/video/surfaces/{surfaceID}/{screenIndex}/controlPoint
 * @export
 * @interface SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse
 */
export interface SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse {
    /**
     * 
     * @type {string}
     * @memberof SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse
     */
    data?: object;
}

export function SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponseFromJSON(json: any): SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse {
    return SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponseFromJSONTyped(json, false);
}

export function SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponseToJSON(value?: SettingsVideoSurfacesSurfaceIDScreenIndexControlPointResponse | null): any {
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

