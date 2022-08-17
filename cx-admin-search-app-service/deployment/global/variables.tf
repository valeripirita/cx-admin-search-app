variable "AWS_REGION" {
  type        = string
  description = "aws region"
  default = "eu-west-2"
}

variable "task_count" {
  default = 4
}

variable "fargate_cpu" {
  default = 512
}

variable "fargate_memory" {
  default = 1024
}

variable "deployment_validation_timeout_seconds" {
  default = 420
}

variable "dynatrace_environment_id" {
  default = "" #bad idea to default as easy to contaminate hdz48658
}

variable "vault_addr" {}
variable "vault_provider_auth_login_path" {
  default = "auth/approle/login"
}
variable "vault_role_id" {}
variable "vault_secret_id" {}
variable "vault_backend_aws" {}
variable "vault_role_csp" {}
variable "vault_role_csp_arn" {}
variable "image_version" {}

