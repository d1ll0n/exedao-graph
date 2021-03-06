// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Daoist extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Daoist entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Daoist entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Daoist", id.toString(), this);
  }

  static load(id: string): Daoist | null {
    return store.get("Daoist", id) as Daoist | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }
}

export class Application extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Application entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Application entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Application", id.toString(), this);
  }

  static load(id: string): Application | null {
    return store.get("Application", id) as Application | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get applicant(): Bytes {
    let value = this.get("applicant");
    return value.toBytes();
  }

  set applicant(value: Bytes) {
    this.set("applicant", Value.fromBytes(value));
  }

  get shares(): BigInt {
    let value = this.get("shares");
    return value.toBigInt();
  }

  set shares(value: BigInt) {
    this.set("shares", Value.fromBigInt(value));
  }

  get metaHash(): Bytes {
    let value = this.get("metaHash");
    return value.toBytes();
  }

  set metaHash(value: Bytes) {
    this.set("metaHash", Value.fromBytes(value));
  }

  get weiTribute(): BigInt | null {
    let value = this.get("weiTribute");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set weiTribute(value: BigInt | null) {
    if (value === null) {
      this.unset("weiTribute");
    } else {
      this.set("weiTribute", Value.fromBigInt(value as BigInt));
    }
  }

  get tokenTributes(): Array<Bytes> | null {
    let value = this.get("tokenTributes");
    if (value === null) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set tokenTributes(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("tokenTributes");
    } else {
      this.set("tokenTributes", Value.fromBytesArray(value as Array<Bytes>));
    }
  }

  get tokenTributeValues(): Array<BigInt> | null {
    let value = this.get("tokenTributeValues");
    if (value === null) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set tokenTributeValues(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("tokenTributeValues");
    } else {
      this.set(
        "tokenTributeValues",
        Value.fromBigIntArray(value as Array<BigInt>)
      );
    }
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get acceptedAt(): Bytes | null {
    let value = this.get("acceptedAt");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set acceptedAt(value: Bytes | null) {
    if (value === null) {
      this.unset("acceptedAt");
    } else {
      this.set("acceptedAt", Value.fromBytes(value as Bytes));
    }
  }

  get canceledAt(): Bytes | null {
    let value = this.get("canceledAt");
    if (value === null) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set canceledAt(value: Bytes | null) {
    if (value === null) {
      this.unset("canceledAt");
    } else {
      this.set("canceledAt", Value.fromBytes(value as Bytes));
    }
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get submitter(): Bytes {
    let value = this.get("submitter");
    return value.toBytes();
  }

  set submitter(value: Bytes) {
    this.set("submitter", Value.fromBytes(value));
  }

  get proposalHash(): Bytes {
    let value = this.get("proposalHash");
    return value.toBytes();
  }

  set proposalHash(value: Bytes) {
    this.set("proposalHash", Value.fromBytes(value));
  }

  get metaHash(): Bytes {
    let value = this.get("metaHash");
    return value.toBytes();
  }

  set metaHash(value: Bytes) {
    this.set("metaHash", Value.fromBytes(value));
  }

  get votesCast(): BigInt {
    let value = this.get("votesCast");
    return value.toBigInt();
  }

  set votesCast(value: BigInt) {
    this.set("votesCast", Value.fromBigInt(value));
  }

  get txHash(): Bytes {
    let value = this.get("txHash");
    return value.toBytes();
  }

  set txHash(value: Bytes) {
    this.set("txHash", Value.fromBytes(value));
  }

  get acceptedAt(): BigInt | null {
    let value = this.get("acceptedAt");
    if (value === null) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set acceptedAt(value: BigInt | null) {
    if (value === null) {
      this.unset("acceptedAt");
    } else {
      this.set("acceptedAt", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Extension extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Extension entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Extension entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Extension", id.toString(), this);
  }

  static load(id: string): Extension | null {
    return store.get("Extension", id) as Extension | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get extensionIndex(): BigInt {
    let value = this.get("extensionIndex");
    return value.toBigInt();
  }

  set extensionIndex(value: BigInt) {
    this.set("extensionIndex", Value.fromBigInt(value));
  }

  get metaHash(): Bytes {
    let value = this.get("metaHash");
    return value.toBytes();
  }

  set metaHash(value: Bytes) {
    this.set("metaHash", Value.fromBytes(value));
  }

  get extensionAddress(): Bytes {
    let value = this.get("extensionAddress");
    return value.toBytes();
  }

  set extensionAddress(value: Bytes) {
    this.set("extensionAddress", Value.fromBytes(value));
  }

  get useDelegate(): boolean {
    let value = this.get("useDelegate");
    return value.toBoolean();
  }

  set useDelegate(value: boolean) {
    this.set("useDelegate", Value.fromBoolean(value));
  }

  get functionSignatures(): Array<Bytes> {
    let value = this.get("functionSignatures");
    return value.toBytesArray();
  }

  set functionSignatures(value: Array<Bytes>) {
    this.set("functionSignatures", Value.fromBytesArray(value));
  }

  get proposalHash(): Bytes {
    let value = this.get("proposalHash");
    return value.toBytes();
  }

  set proposalHash(value: Bytes) {
    this.set("proposalHash", Value.fromBytes(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}
