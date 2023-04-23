import { workspace } from 'vscode'
import * as path from 'path'

export interface DataSchema {
  label: string
  files: { name: string; uri: string }[]
}

export function getWorkspacePath() {
  return workspace.workspaceFolders?.[0].uri.fsPath
}

export function getPathRelativeToWorkspace(filePath: string) {
  const workspacePath = getWorkspacePath()
  return workspacePath && path.isAbsolute(filePath)
    ? path.relative(workspacePath, filePath)
    : filePath
}

export function forceArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}
