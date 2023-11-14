export interface ServiceError extends Error {
  status: number;
}

export function createServiceError(e: unknown) {
  const serviceError: ServiceError = {
    status:
      e instanceof Error && "statusCode" in e ? Number(e.statusCode) : 500,
    name: "Internal Server Error",
    message: typeof e === "string" ? e : String(e),
  };

  throw serviceError;
}
