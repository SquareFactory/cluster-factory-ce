# --------------------
# OVH credentials
# --------------------
variable "application_key" {
  description = "OVH Application Key"
  type        = string
  sensitive   = true
}

variable "application_secret" {
  description = "OVH Secret Key"
  type        = string
  sensitive   = true
}

variable "consumer_key" {
  description = "OVH Consumer Key"
  type        = string
  sensitive   = true
}

# -----------------------------------
# OVH instance common parameters
# -----------------------------------

variable "region" {
  description = "Region"
  type        = string
  default     = "GRA9"
}

variable "ssh_keys" {
  description = "Default SSH Keys"
  type        = list(string)
}

variable "network" {
  description = "Connected Private Network"
  type        = string
}

variable "gw" {
  description = "Gateway"
  type        = string
  default     = "172.26.0.2"
}

# --------------------------------
# OVH k0s instance parameters
# --------------------------------

variable "k0s_instances" {
  description = "Instances definition"
  type = list(object({
    server_name    = string
    image_name     = string
    ostype         = string
    flavor_name    = string
    tags           = optional(map(string))
    root_disk_size = number
    addresses      = string
    dns            = optional(string)
    search         = optional(string)
  }))

  validation {
    condition = alltrue([
      for instance in var.k0s_instances : contains(["ubuntu", "rhel8", "rhel9"], instance.ostype)
    ])
    error_message = "The ostype should be one of ['ubuntu', 'rhel8', 'rhel9']"
  }

  validation {
    condition = alltrue([
      for instance in var.k0s_instances : contains(["featured", "community", "mine"], instance.template_filter)
    ])
    error_message = "The template_filter should be one of ['featured', 'community', 'mine']"
  }
}

# ----------------------------
# Exoscale storage parameters
# ---------------------------

variable "storage" {
  description = "Storage definition"
  type = object({
    server_name    = string
    flavor_name    = string
    tags           = optional(map(string))
    root_disk_size = number
    addresses      = string
    dns            = optional(string)
    search         = optional(string)
    shares = list(object({
      path  = string
      owner = optional(string)
      mode  = optional(string)
    }))
  })
}
