locals {
  service_name       = "cx-admin-search-app-service"
  target_group_name  = "search-app-service-ecs-target-group"
}

# SSM PARAMS
data "aws_ssm_parameter" "public_alb_id" {
  name = "public_alb_id"
}

data "aws_ssm_parameter" "public_address" {
  name = "internal_domain"
}

module "load-balanced-service-deployment" {
  source             = "tfe00.stg.root.pgt.gamesysgames.com/Technical/load-balanced-ecs-service-deployment/aws"
  service_name       = local.service_name
  AWS_REGION         = var.AWS_REGION
  fargate_cpu        = var.fargate_cpu
  fargate_memory     = var.fargate_memory
  task_count         = var.task_count
  env_vars = [
    {
      "name" : "SPRING_PROFILES_ACTIVE",
      "value" : "aws"
    }
  ]
  secrets = []
  ssm_resource_arns = [
    data.aws_ssm_parameter.public_address.arn,
    data.aws_ssm_parameter.public_alb_id.arn
  ]
  secret_arns = []
  image_version            = var.image_version
  target_group_name        = local.target_group_name
  alb_listener_arn_ssm_param_key = "https_public_alb_listener_arn"
  dynatrace_platform_key = ""
  hosted_zone_id_ssm_param_key = "cs_public_zone_id"
  image_path = "cx-admin-search-app-ui"
  artifactory_credentials_secret_name = "artifactory_credentials"
}
