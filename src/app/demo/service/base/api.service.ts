import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { environment } from "src/environments/environment";
import { TranslateService } from '@ngx-translate/core';
@Injectable({
    providedIn: "root",
  })
  export abstract class ApiService {
    baseUrl: string;

  constructor(
    protected http: HttpClient,
    protected translate: TranslateService,
    protected messageService: MessageService
  ) {
    this.baseUrl=environment.baseUrl;
  }

  public showLoadError(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'error',
      summary: this.translate.instant('ERROR'),
      detail: message ?? this.translate.instant('ERROR_ON_LOAD_DATA'),
      life: 3000,
    });
  }

  public showLoadSuccess(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'success',
      summary: this.translate.instant('SUCCESSFUL'),
      detail: message ?? this.translate.instant('DATA_SUCCESSFULLY_LOADED'),
      life: 3000,
    });
  }

  public showCreateError(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'error',
      summary: this.translate.instant('ERROR'),
      detail: message ?? this.translate.instant('ERROR_ON_CREATE'),
      life: 3000,
    });
  }

  public showUpdateError(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'error',
      summary: this.translate.instant('ERROR'),
      detail: message ?? this.translate.instant('ERROR_ON_UPDATE'),
      life: 3000,
    });
  }

  public showDeleteError(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'error',
      summary: this.translate.instant('ERROR'),
      detail: message ?? this.translate.instant('ERROR_ON_DELETE_ENTRY'),
      life: 3000,
    });
  }

  public showDeleteRangeError(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'error',
      summary: this.translate.instant('ERROR'),
      detail: message ?? this.translate.instant('ERROR_ON_DELETE_ENTRIES'),
      life: 3000,
    });
  }

  public showCreateSuccess(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,

      severity: 'success',
      summary: this.translate.instant('SUCCESSFUL'),
      detail: message ?? this.translate.instant('ENTRY_CREATED'),
      life: 3000,
    });
  }

  public showUpdateSuccess(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'success',
      summary: this.translate.instant('SUCCESSFUL'),
      detail: message ?? this.translate.instant('ENTRY_UPDATED'),
      life: 3000,
    });
  }

  public showDeleteSuccess(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'success',
      summary: this.translate.instant('SUCCESSFUL'),
      detail: message ?? this.translate.instant('ENTRY_DELETED'),
      life: 3000,
    });
  }

  public showDeleteRangeSuccess(
    message: string | null = null,
    key: string | undefined = undefined
  ) {
    this.messageService.add({
      key: key,
      severity: 'success',
      detail: message ?? this.translate.instant('ENTRIES_DELETED'),
      life: 3000,
    });
  }

  public showNotification(
    detail?: string,
    summary?: string,
    severity: 'success' | 'info' | 'warn' | 'error' | undefined = 'success',
    life: number = 2500,
    icon?: string
  ) {
    this.messageService.add({
      key: undefined,
      severity: severity,
      detail: detail,
      summary: summary,
      icon: icon,
      life: life,
    });
  }
  }
  