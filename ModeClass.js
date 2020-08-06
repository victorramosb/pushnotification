/*
expo install expo-notifications
*/

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import React, { Component, useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform } from 'react-native';

