# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Credentials <a name="Credentials" id="cdktf-databricks-constructs.Credentials"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.Credentials.Initializer"></a>

```typescript
import { Credentials } from 'cdktf-databricks-constructs'

new Credentials(scope: Construct, id: string, config: CredentialsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Credentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Credentials.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Credentials.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.CredentialsConfig">CredentialsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.Credentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.Credentials.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.Credentials.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.CredentialsConfig">CredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Credentials.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.Credentials.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Credentials.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.Credentials.isConstruct"></a>

```typescript
import { Credentials } from 'cdktf-databricks-constructs'

Credentials.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.Credentials.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Credentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.Credentials.property.credentialsId">credentialsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Credentials.property.credentialsName">credentialsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Credentials.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Credentials.property.iamRole">iamRole</a></code> | <code><a href="#cdktf-databricks-constructs.CrossAccountRole">CrossAccountRole</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.Credentials.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `credentialsId`<sup>Required</sup> <a name="credentialsId" id="cdktf-databricks-constructs.Credentials.property.credentialsId"></a>

```typescript
public readonly credentialsId: string;
```

- *Type:* string

---

##### `credentialsName`<sup>Required</sup> <a name="credentialsName" id="cdktf-databricks-constructs.Credentials.property.credentialsName"></a>

```typescript
public readonly credentialsName: string;
```

- *Type:* string

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="cdktf-databricks-constructs.Credentials.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="cdktf-databricks-constructs.Credentials.property.iamRole"></a>

```typescript
public readonly iamRole: CrossAccountRole;
```

- *Type:* <a href="#cdktf-databricks-constructs.CrossAccountRole">CrossAccountRole</a>

---


### CrossAccountRole <a name="CrossAccountRole" id="cdktf-databricks-constructs.CrossAccountRole"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.CrossAccountRole.Initializer"></a>

```typescript
import { CrossAccountRole } from 'cdktf-databricks-constructs'

new CrossAccountRole(scope: Construct, id: string, config: CrossAccountRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.CrossAccountRoleConfig">CrossAccountRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.CrossAccountRole.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.CrossAccountRoleConfig">CrossAccountRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.CrossAccountRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.CrossAccountRole.isConstruct"></a>

```typescript
import { CrossAccountRole } from 'cdktf-databricks-constructs'

CrossAccountRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.CrossAccountRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.property.policy">policy</a></code> | <code>@cdktf/provider-aws.iamRolePolicy.IamRolePolicy</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.CrossAccountRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `policy`<sup>Required</sup> <a name="policy" id="cdktf-databricks-constructs.CrossAccountRole.property.policy"></a>

```typescript
public readonly policy: IamRolePolicy;
```

- *Type:* @cdktf/provider-aws.iamRolePolicy.IamRolePolicy

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdktf-databricks-constructs.CrossAccountRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdktf-databricks-constructs.CrossAccountRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---


### RootBucket <a name="RootBucket" id="cdktf-databricks-constructs.RootBucket"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.RootBucket.Initializer"></a>

```typescript
import { RootBucket } from 'cdktf-databricks-constructs'

new RootBucket(scope: Construct, id: string, config: S3BucketConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.RootBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.Initializer.parameter.config">config</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketConfig</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.RootBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.RootBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.RootBucket.Initializer.parameter.config"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketConfig

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.RootBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putCorsRule">putCorsRule</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putLifecycleRule">putLifecycleRule</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putLogging">putLogging</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putObjectLockConfiguration">putObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putReplicationConfiguration">putReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putServerSideEncryptionConfiguration">putServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putVersioning">putVersioning</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.putWebsite">putWebsite</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetAccelerationStatus">resetAccelerationStatus</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetBucketPrefix">resetBucketPrefix</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetCorsRule">resetCorsRule</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetForceDestroy">resetForceDestroy</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetId">resetId</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetLifecycleRule">resetLifecycleRule</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetLogging">resetLogging</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetObjectLockConfiguration">resetObjectLockConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetObjectLockEnabled">resetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetPolicy">resetPolicy</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetReplicationConfiguration">resetReplicationConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetRequestPayer">resetRequestPayer</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetServerSideEncryptionConfiguration">resetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetVersioning">resetVersioning</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.resetWebsite">resetWebsite</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.RootBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="cdktf-databricks-constructs.RootBucket.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktf-databricks-constructs.RootBucket.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="cdktf-databricks-constructs.RootBucket.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="cdktf-databricks-constructs.RootBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="cdktf-databricks-constructs.RootBucket.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="cdktf-databricks-constructs.RootBucket.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="cdktf-databricks-constructs.RootBucket.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="cdktf-databricks-constructs.RootBucket.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="cdktf-databricks-constructs.RootBucket.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="cdktf-databricks-constructs.RootBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="cdktf-databricks-constructs.RootBucket.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="cdktf-databricks-constructs.RootBucket.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="cdktf-databricks-constructs.RootBucket.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="cdktf-databricks-constructs.RootBucket.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="cdktf-databricks-constructs.RootBucket.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="cdktf-databricks-constructs.RootBucket.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="cdktf-databricks-constructs.RootBucket.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="cdktf-databricks-constructs.RootBucket.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.RootBucket.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-databricks-constructs.RootBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="cdktf-databricks-constructs.RootBucket.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="cdktf-databricks-constructs.RootBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="cdktf-databricks-constructs.RootBucket.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.RootBucket.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="cdktf-databricks-constructs.RootBucket.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="cdktf-databricks-constructs.RootBucket.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="cdktf-databricks-constructs.RootBucket.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="cdktf-databricks-constructs.RootBucket.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.RootBucket.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCorsRule` <a name="putCorsRule" id="cdktf-databricks-constructs.RootBucket.putCorsRule"></a>

```typescript
public putCorsRule(value: IResolvable | S3BucketCorsRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putCorsRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketCorsRule[]

---

##### `putGrant` <a name="putGrant" id="cdktf-databricks-constructs.RootBucket.putGrant"></a>

```typescript
public putGrant(value: IResolvable | S3BucketGrant[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putGrant.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketGrant[]

---

##### `putLifecycleRule` <a name="putLifecycleRule" id="cdktf-databricks-constructs.RootBucket.putLifecycleRule"></a>

```typescript
public putLifecycleRule(value: IResolvable | S3BucketLifecycleRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putLifecycleRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule[]

---

##### `putLogging` <a name="putLogging" id="cdktf-databricks-constructs.RootBucket.putLogging"></a>

```typescript
public putLogging(value: S3BucketLogging): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putLogging.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketLogging

---

##### `putObjectLockConfiguration` <a name="putObjectLockConfiguration" id="cdktf-databricks-constructs.RootBucket.putObjectLockConfiguration"></a>

```typescript
public putObjectLockConfiguration(value: S3BucketObjectLockConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putObjectLockConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration

---

##### `putReplicationConfiguration` <a name="putReplicationConfiguration" id="cdktf-databricks-constructs.RootBucket.putReplicationConfiguration"></a>

```typescript
public putReplicationConfiguration(value: S3BucketReplicationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putReplicationConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration

---

##### `putServerSideEncryptionConfiguration` <a name="putServerSideEncryptionConfiguration" id="cdktf-databricks-constructs.RootBucket.putServerSideEncryptionConfiguration"></a>

```typescript
public putServerSideEncryptionConfiguration(value: S3BucketServerSideEncryptionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration

---

##### `putTimeouts` <a name="putTimeouts" id="cdktf-databricks-constructs.RootBucket.putTimeouts"></a>

```typescript
public putTimeouts(value: S3BucketTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketTimeouts

---

##### `putVersioning` <a name="putVersioning" id="cdktf-databricks-constructs.RootBucket.putVersioning"></a>

```typescript
public putVersioning(value: S3BucketVersioning): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putVersioning.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketVersioning

---

##### `putWebsite` <a name="putWebsite" id="cdktf-databricks-constructs.RootBucket.putWebsite"></a>

```typescript
public putWebsite(value: S3BucketWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="cdktf-databricks-constructs.RootBucket.putWebsite.parameter.value"></a>

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketWebsite

---

##### `resetAccelerationStatus` <a name="resetAccelerationStatus" id="cdktf-databricks-constructs.RootBucket.resetAccelerationStatus"></a>

```typescript
public resetAccelerationStatus(): void
```

##### `resetAcl` <a name="resetAcl" id="cdktf-databricks-constructs.RootBucket.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetBucket` <a name="resetBucket" id="cdktf-databricks-constructs.RootBucket.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetBucketPrefix` <a name="resetBucketPrefix" id="cdktf-databricks-constructs.RootBucket.resetBucketPrefix"></a>

```typescript
public resetBucketPrefix(): void
```

##### `resetCorsRule` <a name="resetCorsRule" id="cdktf-databricks-constructs.RootBucket.resetCorsRule"></a>

```typescript
public resetCorsRule(): void
```

##### `resetForceDestroy` <a name="resetForceDestroy" id="cdktf-databricks-constructs.RootBucket.resetForceDestroy"></a>

```typescript
public resetForceDestroy(): void
```

##### `resetGrant` <a name="resetGrant" id="cdktf-databricks-constructs.RootBucket.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetId` <a name="resetId" id="cdktf-databricks-constructs.RootBucket.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLifecycleRule` <a name="resetLifecycleRule" id="cdktf-databricks-constructs.RootBucket.resetLifecycleRule"></a>

```typescript
public resetLifecycleRule(): void
```

##### `resetLogging` <a name="resetLogging" id="cdktf-databricks-constructs.RootBucket.resetLogging"></a>

```typescript
public resetLogging(): void
```

##### `resetObjectLockConfiguration` <a name="resetObjectLockConfiguration" id="cdktf-databricks-constructs.RootBucket.resetObjectLockConfiguration"></a>

```typescript
public resetObjectLockConfiguration(): void
```

##### `resetObjectLockEnabled` <a name="resetObjectLockEnabled" id="cdktf-databricks-constructs.RootBucket.resetObjectLockEnabled"></a>

```typescript
public resetObjectLockEnabled(): void
```

##### `resetPolicy` <a name="resetPolicy" id="cdktf-databricks-constructs.RootBucket.resetPolicy"></a>

```typescript
public resetPolicy(): void
```

##### `resetRegion` <a name="resetRegion" id="cdktf-databricks-constructs.RootBucket.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetReplicationConfiguration` <a name="resetReplicationConfiguration" id="cdktf-databricks-constructs.RootBucket.resetReplicationConfiguration"></a>

```typescript
public resetReplicationConfiguration(): void
```

##### `resetRequestPayer` <a name="resetRequestPayer" id="cdktf-databricks-constructs.RootBucket.resetRequestPayer"></a>

```typescript
public resetRequestPayer(): void
```

##### `resetServerSideEncryptionConfiguration` <a name="resetServerSideEncryptionConfiguration" id="cdktf-databricks-constructs.RootBucket.resetServerSideEncryptionConfiguration"></a>

```typescript
public resetServerSideEncryptionConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="cdktf-databricks-constructs.RootBucket.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="cdktf-databricks-constructs.RootBucket.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="cdktf-databricks-constructs.RootBucket.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersioning` <a name="resetVersioning" id="cdktf-databricks-constructs.RootBucket.resetVersioning"></a>

```typescript
public resetVersioning(): void
```

##### `resetWebsite` <a name="resetWebsite" id="cdktf-databricks-constructs.RootBucket.resetWebsite"></a>

```typescript
public resetWebsite(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.RootBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.RootBucket.isConstruct"></a>

```typescript
import { RootBucket } from 'cdktf-databricks-constructs'

RootBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.RootBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="cdktf-databricks-constructs.RootBucket.isTerraformElement"></a>

```typescript
import { RootBucket } from 'cdktf-databricks-constructs'

RootBucket.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.RootBucket.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="cdktf-databricks-constructs.RootBucket.isTerraformResource"></a>

```typescript
import { RootBucket } from 'cdktf-databricks-constructs'

RootBucket.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.RootBucket.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="cdktf-databricks-constructs.RootBucket.generateConfigForImport"></a>

```typescript
import { RootBucket } from 'cdktf-databricks-constructs'

RootBucket.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3Bucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.RootBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="cdktf-databricks-constructs.RootBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3Bucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="cdktf-databricks-constructs.RootBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3Bucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-databricks-constructs.RootBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3Bucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketRegion">bucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.corsRule">corsRule</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.grant">grant</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketGrantList</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.lifecycleRule">lifecycleRule</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.logging">logging</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.objectLockConfiguration">objectLockConfiguration</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.replicationConfiguration">replicationConfiguration</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.serverSideEncryptionConfiguration">serverSideEncryptionConfiguration</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.versioning">versioning</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.website">website</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.websiteDomain">websiteDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.websiteEndpoint">websiteEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.accelerationStatusInput">accelerationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketPrefixInput">bucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.corsRuleInput">corsRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3Bucket.S3BucketCorsRule[]</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.forceDestroyInput">forceDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.grantInput">grantInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3Bucket.S3BucketGrant[]</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.lifecycleRuleInput">lifecycleRuleInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule[]</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.loggingInput">loggingInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketLogging</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.objectLockConfigurationInput">objectLockConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.objectLockEnabledInput">objectLockEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.replicationConfigurationInput">replicationConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.requestPayerInput">requestPayerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.serverSideEncryptionConfigurationInput">serverSideEncryptionConfigurationInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-aws.s3Bucket.S3BucketTimeouts</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.versioningInput">versioningInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketVersioning</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.websiteInput">websiteInput</a></code> | <code>@cdktf/provider-aws.s3Bucket.S3BucketWebsite</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.accelerationStatus">accelerationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.forceDestroy">forceDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.requestPayer">requestPayer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.bucketPolicy">bucketPolicy</a></code> | <code>@cdktf/provider-aws.s3BucketPolicy.S3BucketPolicy</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.RootBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="cdktf-databricks-constructs.RootBucket.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="cdktf-databricks-constructs.RootBucket.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="cdktf-databricks-constructs.RootBucket.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="cdktf-databricks-constructs.RootBucket.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="cdktf-databricks-constructs.RootBucket.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="cdktf-databricks-constructs.RootBucket.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="cdktf-databricks-constructs.RootBucket.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="cdktf-databricks-constructs.RootBucket.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="cdktf-databricks-constructs.RootBucket.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="cdktf-databricks-constructs.RootBucket.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="cdktf-databricks-constructs.RootBucket.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="cdktf-databricks-constructs.RootBucket.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="cdktf-databricks-constructs.RootBucket.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="cdktf-databricks-constructs.RootBucket.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="cdktf-databricks-constructs.RootBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

---

##### `bucketRegion`<sup>Required</sup> <a name="bucketRegion" id="cdktf-databricks-constructs.RootBucket.property.bucketRegion"></a>

```typescript
public readonly bucketRegion: string;
```

- *Type:* string

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="cdktf-databricks-constructs.RootBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

---

##### `corsRule`<sup>Required</sup> <a name="corsRule" id="cdktf-databricks-constructs.RootBucket.property.corsRule"></a>

```typescript
public readonly corsRule: S3BucketCorsRuleList;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketCorsRuleList

---

##### `grant`<sup>Required</sup> <a name="grant" id="cdktf-databricks-constructs.RootBucket.property.grant"></a>

```typescript
public readonly grant: S3BucketGrantList;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketGrantList

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="cdktf-databricks-constructs.RootBucket.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `lifecycleRule`<sup>Required</sup> <a name="lifecycleRule" id="cdktf-databricks-constructs.RootBucket.property.lifecycleRule"></a>

```typescript
public readonly lifecycleRule: S3BucketLifecycleRuleList;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketLifecycleRuleList

---

##### `logging`<sup>Required</sup> <a name="logging" id="cdktf-databricks-constructs.RootBucket.property.logging"></a>

```typescript
public readonly logging: S3BucketLoggingOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketLoggingOutputReference

---

##### `objectLockConfiguration`<sup>Required</sup> <a name="objectLockConfiguration" id="cdktf-databricks-constructs.RootBucket.property.objectLockConfiguration"></a>

```typescript
public readonly objectLockConfiguration: S3BucketObjectLockConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfigurationOutputReference

---

##### `replicationConfiguration`<sup>Required</sup> <a name="replicationConfiguration" id="cdktf-databricks-constructs.RootBucket.property.replicationConfiguration"></a>

```typescript
public readonly replicationConfiguration: S3BucketReplicationConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketReplicationConfigurationOutputReference

---

##### `serverSideEncryptionConfiguration`<sup>Required</sup> <a name="serverSideEncryptionConfiguration" id="cdktf-databricks-constructs.RootBucket.property.serverSideEncryptionConfiguration"></a>

```typescript
public readonly serverSideEncryptionConfiguration: S3BucketServerSideEncryptionConfigurationOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfigurationOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="cdktf-databricks-constructs.RootBucket.property.timeouts"></a>

```typescript
public readonly timeouts: S3BucketTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketTimeoutsOutputReference

---

##### `versioning`<sup>Required</sup> <a name="versioning" id="cdktf-databricks-constructs.RootBucket.property.versioning"></a>

```typescript
public readonly versioning: S3BucketVersioningOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketVersioningOutputReference

---

##### `website`<sup>Required</sup> <a name="website" id="cdktf-databricks-constructs.RootBucket.property.website"></a>

```typescript
public readonly website: S3BucketWebsiteOutputReference;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketWebsiteOutputReference

---

##### `websiteDomain`<sup>Required</sup> <a name="websiteDomain" id="cdktf-databricks-constructs.RootBucket.property.websiteDomain"></a>

```typescript
public readonly websiteDomain: string;
```

- *Type:* string

---

##### `websiteEndpoint`<sup>Required</sup> <a name="websiteEndpoint" id="cdktf-databricks-constructs.RootBucket.property.websiteEndpoint"></a>

```typescript
public readonly websiteEndpoint: string;
```

- *Type:* string

---

##### `accelerationStatusInput`<sup>Optional</sup> <a name="accelerationStatusInput" id="cdktf-databricks-constructs.RootBucket.property.accelerationStatusInput"></a>

```typescript
public readonly accelerationStatusInput: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="cdktf-databricks-constructs.RootBucket.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="cdktf-databricks-constructs.RootBucket.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `bucketPrefixInput`<sup>Optional</sup> <a name="bucketPrefixInput" id="cdktf-databricks-constructs.RootBucket.property.bucketPrefixInput"></a>

```typescript
public readonly bucketPrefixInput: string;
```

- *Type:* string

---

##### `corsRuleInput`<sup>Optional</sup> <a name="corsRuleInput" id="cdktf-databricks-constructs.RootBucket.property.corsRuleInput"></a>

```typescript
public readonly corsRuleInput: IResolvable | S3BucketCorsRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketCorsRule[]

---

##### `forceDestroyInput`<sup>Optional</sup> <a name="forceDestroyInput" id="cdktf-databricks-constructs.RootBucket.property.forceDestroyInput"></a>

```typescript
public readonly forceDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="cdktf-databricks-constructs.RootBucket.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | S3BucketGrant[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketGrant[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="cdktf-databricks-constructs.RootBucket.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `lifecycleRuleInput`<sup>Optional</sup> <a name="lifecycleRuleInput" id="cdktf-databricks-constructs.RootBucket.property.lifecycleRuleInput"></a>

```typescript
public readonly lifecycleRuleInput: IResolvable | S3BucketLifecycleRule[];
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketLifecycleRule[]

---

##### `loggingInput`<sup>Optional</sup> <a name="loggingInput" id="cdktf-databricks-constructs.RootBucket.property.loggingInput"></a>

```typescript
public readonly loggingInput: S3BucketLogging;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketLogging

---

##### `objectLockConfigurationInput`<sup>Optional</sup> <a name="objectLockConfigurationInput" id="cdktf-databricks-constructs.RootBucket.property.objectLockConfigurationInput"></a>

```typescript
public readonly objectLockConfigurationInput: S3BucketObjectLockConfiguration;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketObjectLockConfiguration

---

##### `objectLockEnabledInput`<sup>Optional</sup> <a name="objectLockEnabledInput" id="cdktf-databricks-constructs.RootBucket.property.objectLockEnabledInput"></a>

```typescript
public readonly objectLockEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="cdktf-databricks-constructs.RootBucket.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="cdktf-databricks-constructs.RootBucket.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `replicationConfigurationInput`<sup>Optional</sup> <a name="replicationConfigurationInput" id="cdktf-databricks-constructs.RootBucket.property.replicationConfigurationInput"></a>

```typescript
public readonly replicationConfigurationInput: S3BucketReplicationConfiguration;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketReplicationConfiguration

---

##### `requestPayerInput`<sup>Optional</sup> <a name="requestPayerInput" id="cdktf-databricks-constructs.RootBucket.property.requestPayerInput"></a>

```typescript
public readonly requestPayerInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="serverSideEncryptionConfigurationInput" id="cdktf-databricks-constructs.RootBucket.property.serverSideEncryptionConfigurationInput"></a>

```typescript
public readonly serverSideEncryptionConfigurationInput: S3BucketServerSideEncryptionConfiguration;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketServerSideEncryptionConfiguration

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="cdktf-databricks-constructs.RootBucket.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="cdktf-databricks-constructs.RootBucket.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="cdktf-databricks-constructs.RootBucket.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | S3BucketTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-aws.s3Bucket.S3BucketTimeouts

---

##### `versioningInput`<sup>Optional</sup> <a name="versioningInput" id="cdktf-databricks-constructs.RootBucket.property.versioningInput"></a>

```typescript
public readonly versioningInput: S3BucketVersioning;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketVersioning

---

##### `websiteInput`<sup>Optional</sup> <a name="websiteInput" id="cdktf-databricks-constructs.RootBucket.property.websiteInput"></a>

```typescript
public readonly websiteInput: S3BucketWebsite;
```

- *Type:* @cdktf/provider-aws.s3Bucket.S3BucketWebsite

---

##### `accelerationStatus`<sup>Required</sup> <a name="accelerationStatus" id="cdktf-databricks-constructs.RootBucket.property.accelerationStatus"></a>

```typescript
public readonly accelerationStatus: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="cdktf-databricks-constructs.RootBucket.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="cdktf-databricks-constructs.RootBucket.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Required</sup> <a name="bucketPrefix" id="cdktf-databricks-constructs.RootBucket.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `forceDestroy`<sup>Required</sup> <a name="forceDestroy" id="cdktf-databricks-constructs.RootBucket.property.forceDestroy"></a>

```typescript
public readonly forceDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.RootBucket.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `objectLockEnabled`<sup>Required</sup> <a name="objectLockEnabled" id="cdktf-databricks-constructs.RootBucket.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `policy`<sup>Required</sup> <a name="policy" id="cdktf-databricks-constructs.RootBucket.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.RootBucket.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `requestPayer`<sup>Required</sup> <a name="requestPayer" id="cdktf-databricks-constructs.RootBucket.property.requestPayer"></a>

```typescript
public readonly requestPayer: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="cdktf-databricks-constructs.RootBucket.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="cdktf-databricks-constructs.RootBucket.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `bucketPolicy`<sup>Required</sup> <a name="bucketPolicy" id="cdktf-databricks-constructs.RootBucket.property.bucketPolicy"></a>

```typescript
public readonly bucketPolicy: S3BucketPolicy;
```

- *Type:* @cdktf/provider-aws.s3BucketPolicy.S3BucketPolicy

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.RootBucket.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="cdktf-databricks-constructs.RootBucket.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

### ServerlessWorkspace <a name="ServerlessWorkspace" id="cdktf-databricks-constructs.ServerlessWorkspace"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.ServerlessWorkspace.Initializer"></a>

```typescript
import { ServerlessWorkspace } from 'cdktf-databricks-constructs'

new ServerlessWorkspace(scope: Construct, id: string, config: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.ServerlessWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.ServerlessWorkspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.ServerlessWorkspace.isConstruct"></a>

```typescript
import { ServerlessWorkspace } from 'cdktf-databricks-constructs'

ServerlessWorkspace.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.ServerlessWorkspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.credentials">credentials</a></code> | <code><a href="#cdktf-databricks-constructs.Credentials">Credentials</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.metastore">metastore</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.ServerlessWorkspace.property.storage">storage</a></code> | <code><a href="#cdktf-databricks-constructs.Storage">Storage</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.ServerlessWorkspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="cdktf-databricks-constructs.ServerlessWorkspace.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="cdktf-databricks-constructs.ServerlessWorkspace.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="cdktf-databricks-constructs.ServerlessWorkspace.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.ServerlessWorkspace.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="cdktf-databricks-constructs.ServerlessWorkspace.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="cdktf-databricks-constructs.ServerlessWorkspace.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* <a href="#cdktf-databricks-constructs.Credentials">Credentials</a>

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="cdktf-databricks-constructs.ServerlessWorkspace.property.metastore"></a>

```typescript
public readonly metastore: UnityCatalogMetastore;
```

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a>

---

##### `storage`<sup>Optional</sup> <a name="storage" id="cdktf-databricks-constructs.ServerlessWorkspace.property.storage"></a>

```typescript
public readonly storage: Storage;
```

- *Type:* <a href="#cdktf-databricks-constructs.Storage">Storage</a>

---


### Storage <a name="Storage" id="cdktf-databricks-constructs.Storage"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.Storage.Initializer"></a>

```typescript
import { Storage } from 'cdktf-databricks-constructs'

new Storage(scope: Construct, id: string, config: StorageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Storage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Storage.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Storage.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.StorageConfig">StorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.Storage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.Storage.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.Storage.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.StorageConfig">StorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Storage.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.Storage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Storage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.Storage.isConstruct"></a>

```typescript
import { Storage } from 'cdktf-databricks-constructs'

Storage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.Storage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Storage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.Storage.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Storage.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Storage.property.storageConfigurationId">storageConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Storage.property.storageConfigurationName">storageConfigurationName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.Storage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="cdktf-databricks-constructs.Storage.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdktf-databricks-constructs.Storage.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `storageConfigurationId`<sup>Required</sup> <a name="storageConfigurationId" id="cdktf-databricks-constructs.Storage.property.storageConfigurationId"></a>

```typescript
public readonly storageConfigurationId: string;
```

- *Type:* string

---

##### `storageConfigurationName`<sup>Required</sup> <a name="storageConfigurationName" id="cdktf-databricks-constructs.Storage.property.storageConfigurationName"></a>

```typescript
public readonly storageConfigurationName: string;
```

- *Type:* string

---


### UnityCatalogMetastore <a name="UnityCatalogMetastore" id="cdktf-databricks-constructs.UnityCatalogMetastore"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.UnityCatalogMetastore.Initializer"></a>

```typescript
import { UnityCatalogMetastore } from 'cdktf-databricks-constructs'

new UnityCatalogMetastore(scope: Construct, id: string, config: UnityCatalogMetastoreConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig">UnityCatalogMetastoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.UnityCatalogMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig">UnityCatalogMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.assign">assign</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.grant">grant</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.UnityCatalogMetastore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `assign` <a name="assign" id="cdktf-databricks-constructs.UnityCatalogMetastore.assign"></a>

```typescript
public assign(id: string, workspaceId: number): MetastoreAssignment
```

###### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.UnityCatalogMetastore.assign.parameter.id"></a>

- *Type:* string

---

###### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="cdktf-databricks-constructs.UnityCatalogMetastore.assign.parameter.workspaceId"></a>

- *Type:* number

---

##### `grant` <a name="grant" id="cdktf-databricks-constructs.UnityCatalogMetastore.grant"></a>

```typescript
public grant(id: string, roleArn: string, isDefault?: boolean): MetastoreDataAccess
```

###### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.UnityCatalogMetastore.grant.parameter.id"></a>

- *Type:* string

---

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdktf-databricks-constructs.UnityCatalogMetastore.grant.parameter.roleArn"></a>

- *Type:* string

---

###### `isDefault`<sup>Optional</sup> <a name="isDefault" id="cdktf-databricks-constructs.UnityCatalogMetastore.grant.parameter.isDefault"></a>

- *Type:* boolean

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.UnityCatalogMetastore.isConstruct"></a>

```typescript
import { UnityCatalogMetastore } from 'cdktf-databricks-constructs'

UnityCatalogMetastore.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.UnityCatalogMetastore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.deltaSharingOrganizationName">deltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.deltaSharingScope">deltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.globalMetastoreId">globalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.metastoreName">metastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.provider">provider</a></code> | <code>@cdktf/provider-databricks.provider.DatabricksProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `deltaSharingOrganizationName`<sup>Required</sup> <a name="deltaSharingOrganizationName" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.deltaSharingOrganizationName"></a>

```typescript
public readonly deltaSharingOrganizationName: string;
```

- *Type:* string

---

##### `deltaSharingScope`<sup>Required</sup> <a name="deltaSharingScope" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.deltaSharingScope"></a>

```typescript
public readonly deltaSharingScope: string;
```

- *Type:* string

---

##### `globalMetastoreId`<sup>Required</sup> <a name="globalMetastoreId" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.globalMetastoreId"></a>

```typescript
public readonly globalMetastoreId: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `metastoreName`<sup>Required</sup> <a name="metastoreName" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.metastoreName"></a>

```typescript
public readonly metastoreName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.provider"></a>

```typescript
public readonly provider: DatabricksProvider;
```

- *Type:* @cdktf/provider-databricks.provider.DatabricksProvider

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageRoot`<sup>Required</sup> <a name="storageRoot" id="cdktf-databricks-constructs.UnityCatalogMetastore.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---


### UnityCatalogRole <a name="UnityCatalogRole" id="cdktf-databricks-constructs.UnityCatalogRole"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.UnityCatalogRole.Initializer"></a>

```typescript
import { UnityCatalogRole } from 'cdktf-databricks-constructs'

new UnityCatalogRole(scope: Construct, id: string, config: UnityCatalogRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogRoleConfig">UnityCatalogRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.UnityCatalogRole.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogRoleConfig">UnityCatalogRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.UnityCatalogRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.UnityCatalogRole.isConstruct"></a>

```typescript
import { UnityCatalogRole } from 'cdktf-databricks-constructs'

UnityCatalogRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.UnityCatalogRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRole.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.UnityCatalogRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="cdktf-databricks-constructs.UnityCatalogRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="cdktf-databricks-constructs.UnityCatalogRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---


### Workspace <a name="Workspace" id="cdktf-databricks-constructs.Workspace"></a>

#### Initializers <a name="Initializers" id="cdktf-databricks-constructs.Workspace.Initializer"></a>

```typescript
import { Workspace } from 'cdktf-databricks-constructs'

new Workspace(scope: Construct, id: string, config: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Workspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-databricks-constructs.WorkspaceConfig">WorkspaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-databricks-constructs.Workspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-databricks-constructs.Workspace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-databricks-constructs.Workspace.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-databricks-constructs.WorkspaceConfig">WorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Workspace.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-databricks-constructs.Workspace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-databricks-constructs.Workspace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-databricks-constructs.Workspace.isConstruct"></a>

```typescript
import { Workspace } from 'cdktf-databricks-constructs'

Workspace.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-databricks-constructs.Workspace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.cloud">cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.deploymentName">deploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.workspaceId">workspaceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.credentials">credentials</a></code> | <code><a href="#cdktf-databricks-constructs.Credentials">Credentials</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.metastore">metastore</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.Workspace.property.storage">storage</a></code> | <code><a href="#cdktf-databricks-constructs.Storage">Storage</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-databricks-constructs.Workspace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="cdktf-databricks-constructs.Workspace.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `cloud`<sup>Required</sup> <a name="cloud" id="cdktf-databricks-constructs.Workspace.property.cloud"></a>

```typescript
public readonly cloud: string;
```

- *Type:* string

---

##### `deploymentName`<sup>Required</sup> <a name="deploymentName" id="cdktf-databricks-constructs.Workspace.property.deploymentName"></a>

```typescript
public readonly deploymentName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.Workspace.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="cdktf-databricks-constructs.Workspace.property.workspaceId"></a>

```typescript
public readonly workspaceId: number;
```

- *Type:* number

---

##### `workspaceName`<sup>Required</sup> <a name="workspaceName" id="cdktf-databricks-constructs.Workspace.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Required</sup> <a name="workspaceUrl" id="cdktf-databricks-constructs.Workspace.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="cdktf-databricks-constructs.Workspace.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* <a href="#cdktf-databricks-constructs.Credentials">Credentials</a>

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="cdktf-databricks-constructs.Workspace.property.metastore"></a>

```typescript
public readonly metastore: UnityCatalogMetastore;
```

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a>

---

##### `storage`<sup>Optional</sup> <a name="storage" id="cdktf-databricks-constructs.Workspace.property.storage"></a>

```typescript
public readonly storage: Storage;
```

- *Type:* <a href="#cdktf-databricks-constructs.Storage">Storage</a>

---


## Structs <a name="Structs" id="Structs"></a>

### CredentialsConfig <a name="CredentialsConfig" id="cdktf-databricks-constructs.CredentialsConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.CredentialsConfig.Initializer"></a>

```typescript
import { CredentialsConfig } from 'cdktf-databricks-constructs'

const credentialsConfig: CredentialsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.CredentialsConfig.property.provider">provider</a></code> | <code>@cdktf/provider-databricks.provider.DatabricksProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CredentialsConfig.property.credentialsName">credentialsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CredentialsConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CredentialsConfig.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-databricks-constructs.CredentialsConfig.property.provider"></a>

```typescript
public readonly provider: DatabricksProvider;
```

- *Type:* @cdktf/provider-databricks.provider.DatabricksProvider

---

##### `credentialsName`<sup>Optional</sup> <a name="credentialsName" id="cdktf-databricks-constructs.CredentialsConfig.property.credentialsName"></a>

```typescript
public readonly credentialsName: string;
```

- *Type:* string

---

##### `databricksAccountId`<sup>Optional</sup> <a name="databricksAccountId" id="cdktf-databricks-constructs.CredentialsConfig.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="cdktf-databricks-constructs.CredentialsConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

### CrossAccountRoleConfig <a name="CrossAccountRoleConfig" id="cdktf-databricks-constructs.CrossAccountRoleConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.CrossAccountRoleConfig.Initializer"></a>

```typescript
import { CrossAccountRoleConfig } from 'cdktf-databricks-constructs'

const crossAccountRoleConfig: CrossAccountRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRoleConfig.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRoleConfig.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.CrossAccountRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="cdktf-databricks-constructs.CrossAccountRoleConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `policyType`<sup>Optional</sup> <a name="policyType" id="cdktf-databricks-constructs.CrossAccountRoleConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="cdktf-databricks-constructs.CrossAccountRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### StorageConfig <a name="StorageConfig" id="cdktf-databricks-constructs.StorageConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.StorageConfig.Initializer"></a>

```typescript
import { StorageConfig } from 'cdktf-databricks-constructs'

const storageConfig: StorageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.StorageConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.StorageConfig.property.provider">provider</a></code> | <code>@cdktf/provider-databricks.provider.DatabricksProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.StorageConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.StorageConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.StorageConfig.property.storageConfigurationName">storageConfigurationName</a></code> | <code>string</code> | *No description.* |

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="cdktf-databricks-constructs.StorageConfig.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-databricks-constructs.StorageConfig.property.provider"></a>

```typescript
public readonly provider: DatabricksProvider;
```

- *Type:* @cdktf/provider-databricks.provider.DatabricksProvider

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="cdktf-databricks-constructs.StorageConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="cdktf-databricks-constructs.StorageConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `storageConfigurationName`<sup>Optional</sup> <a name="storageConfigurationName" id="cdktf-databricks-constructs.StorageConfig.property.storageConfigurationName"></a>

```typescript
public readonly storageConfigurationName: string;
```

- *Type:* string

---

### UnityCatalogMetastoreConfig <a name="UnityCatalogMetastoreConfig" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.Initializer"></a>

```typescript
import { UnityCatalogMetastoreConfig } from 'cdktf-databricks-constructs'

const unityCatalogMetastoreConfig: UnityCatalogMetastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.provider">provider</a></code> | <code>@cdktf/provider-databricks.provider.DatabricksProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.metastoreName">metastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.role">role</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogRole">UnityCatalogRole</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.storageRoot">storageRoot</a></code> | <code>string</code> | *No description.* |

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.provider"></a>

```typescript
public readonly provider: DatabricksProvider;
```

- *Type:* @cdktf/provider-databricks.provider.DatabricksProvider

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `metastoreName`<sup>Optional</sup> <a name="metastoreName" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.metastoreName"></a>

```typescript
public readonly metastoreName: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `role`<sup>Optional</sup> <a name="role" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.role"></a>

```typescript
public readonly role: UnityCatalogRole;
```

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogRole">UnityCatalogRole</a>

---

##### `storageRoot`<sup>Optional</sup> <a name="storageRoot" id="cdktf-databricks-constructs.UnityCatalogMetastoreConfig.property.storageRoot"></a>

```typescript
public readonly storageRoot: string;
```

- *Type:* string

---

### UnityCatalogRoleConfig <a name="UnityCatalogRoleConfig" id="cdktf-databricks-constructs.UnityCatalogRoleConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.UnityCatalogRoleConfig.Initializer"></a>

```typescript
import { UnityCatalogRoleConfig } from 'cdktf-databricks-constructs'

const unityCatalogRoleConfig: UnityCatalogRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRoleConfig.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRoleConfig.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.UnityCatalogRoleConfig.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="cdktf-databricks-constructs.UnityCatalogRoleConfig.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="cdktf-databricks-constructs.UnityCatalogRoleConfig.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `roleName`<sup>Optional</sup> <a name="roleName" id="cdktf-databricks-constructs.UnityCatalogRoleConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

### WorkspaceConfig <a name="WorkspaceConfig" id="cdktf-databricks-constructs.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="cdktf-databricks-constructs.WorkspaceConfig.Initializer"></a>

```typescript
import { WorkspaceConfig } from 'cdktf-databricks-constructs'

const workspaceConfig: WorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.databricksAccountId">databricksAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.provider">provider</a></code> | <code>@cdktf/provider-databricks.provider.DatabricksProvider</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.computeMode">computeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.credentials">credentials</a></code> | <code><a href="#cdktf-databricks-constructs.Credentials">Credentials</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.metastore">metastore</a></code> | <code><a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.storage">storage</a></code> | <code><a href="#cdktf-databricks-constructs.Storage">Storage</a></code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.workspaceName">workspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-databricks-constructs.WorkspaceConfig.property.workspaceUrl">workspaceUrl</a></code> | <code>string</code> | *No description.* |

---

##### `databricksAccountId`<sup>Required</sup> <a name="databricksAccountId" id="cdktf-databricks-constructs.WorkspaceConfig.property.databricksAccountId"></a>

```typescript
public readonly databricksAccountId: string;
```

- *Type:* string

---

##### `provider`<sup>Required</sup> <a name="provider" id="cdktf-databricks-constructs.WorkspaceConfig.property.provider"></a>

```typescript
public readonly provider: DatabricksProvider;
```

- *Type:* @cdktf/provider-databricks.provider.DatabricksProvider

---

##### `region`<sup>Required</sup> <a name="region" id="cdktf-databricks-constructs.WorkspaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `computeMode`<sup>Optional</sup> <a name="computeMode" id="cdktf-databricks-constructs.WorkspaceConfig.property.computeMode"></a>

```typescript
public readonly computeMode: string;
```

- *Type:* string

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="cdktf-databricks-constructs.WorkspaceConfig.property.credentials"></a>

```typescript
public readonly credentials: Credentials;
```

- *Type:* <a href="#cdktf-databricks-constructs.Credentials">Credentials</a>

---

##### `metastore`<sup>Optional</sup> <a name="metastore" id="cdktf-databricks-constructs.WorkspaceConfig.property.metastore"></a>

```typescript
public readonly metastore: UnityCatalogMetastore;
```

- *Type:* <a href="#cdktf-databricks-constructs.UnityCatalogMetastore">UnityCatalogMetastore</a>

---

##### `storage`<sup>Optional</sup> <a name="storage" id="cdktf-databricks-constructs.WorkspaceConfig.property.storage"></a>

```typescript
public readonly storage: Storage;
```

- *Type:* <a href="#cdktf-databricks-constructs.Storage">Storage</a>

---

##### `workspaceName`<sup>Optional</sup> <a name="workspaceName" id="cdktf-databricks-constructs.WorkspaceConfig.property.workspaceName"></a>

```typescript
public readonly workspaceName: string;
```

- *Type:* string

---

##### `workspaceUrl`<sup>Optional</sup> <a name="workspaceUrl" id="cdktf-databricks-constructs.WorkspaceConfig.property.workspaceUrl"></a>

```typescript
public readonly workspaceUrl: string;
```

- *Type:* string

---



