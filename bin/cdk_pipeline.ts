#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/cdk_pipeline-stack';
import { ServiceStack } from '../lib/service-stack';

const app = new cdk.App();
const pipelineStack=new CdkPipelineStack(app, 'CdkPipelineStack', {});
const serviceStackProd=new ServiceStack(app,"ServiceStackProduction")
pipelineStack.addServiceStage(serviceStackProd,"Service")