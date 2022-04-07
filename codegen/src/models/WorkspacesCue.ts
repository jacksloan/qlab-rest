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
 * @interface WorkspacesCue
 */
export interface WorkspacesCue {
    /**
     * 
     * @type {string}
     * @memberof WorkspacesCue
     */
    number?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspacesCue
     */
    uniqueID?: string;
    /**
     * 
     * @type {Array<WorkspacesCue>}
     * @memberof WorkspacesCue
     */
    cues?: Array<WorkspacesCue>;
    /**
     * 
     * @type {boolean}
     * @memberof WorkspacesCue
     */
    flagged?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WorkspacesCue
     */
    listName?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspacesCue
     */
    type?: WorkspacesCueTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof WorkspacesCue
     */
    colorName?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkspacesCue
     */
    name?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof WorkspacesCue
     */
    armed?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum WorkspacesCueTypeEnum {
    Group = 'Group',
    Audio = 'Audio',
    Video = 'Video',
    Text = 'Text',
    Camera = 'Camera',
    Mic = 'Mic',
    Light = 'Light',
    Fade = 'Fade',
    Network = 'Network',
    Midi = 'Midi'
}

export function WorkspacesCueFromJSON(json: any): WorkspacesCue {
    return WorkspacesCueFromJSONTyped(json, false);
}

export function WorkspacesCueFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspacesCue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'number': !exists(json, 'number') ? undefined : json['number'],
        'uniqueID': !exists(json, 'uniqueID') ? undefined : json['uniqueID'],
        'cues': !exists(json, 'cues') ? undefined : ((json['cues'] as Array<any>).map(WorkspacesCueFromJSON)),
        'flagged': !exists(json, 'flagged') ? undefined : json['flagged'],
        'listName': !exists(json, 'listName') ? undefined : json['listName'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'colorName': !exists(json, 'colorName') ? undefined : json['colorName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'armed': !exists(json, 'armed') ? undefined : json['armed'],
    };
}

export function WorkspacesCueToJSON(value?: WorkspacesCue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'number': value.number,
        'uniqueID': value.uniqueID,
        'cues': value.cues === undefined ? undefined : ((value.cues as Array<any>).map(WorkspacesCueToJSON)),
        'flagged': value.flagged,
        'listName': value.listName,
        'type': value.type,
        'colorName': value.colorName,
        'name': value.name,
        'armed': value.armed,
    };
}
