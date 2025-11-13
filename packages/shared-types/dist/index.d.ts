export interface SendEmailDto {
    name: string;
    from: string;
    subject: string;
    message: string;
}
export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    message?: string;
    error?: string;
}
export interface EmailResponse {
    message: string;
}
export type ValidationError = {
    field: string;
    message: string;
};
export interface ValidationResult {
    isValid: boolean;
    errors: ValidationError[];
}
//# sourceMappingURL=index.d.ts.map