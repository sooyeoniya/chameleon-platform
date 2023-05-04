export enum HistoryStatus {
    CACHED = 'cached',
    INITIALIZING = 'initializing',
    RUNNING = 'running',
    ERROR = 'error',
    FINISHED = 'finished',
}

export enum WSMessageType {
    Ready = 'Ready',
    Path = 'Path',
    TerminalResize = 'TerminalResize',
    Terminal = 'Terminal',
    UpdateModel = 'UpdateModel',
    UpdateModels = 'UpdateModels',
    UpdateHistory = 'UpdateHistory',
    UpdateHistories = 'UpdateHistories'

}

export enum SocketMessageType {
    Hello = 'Hello',
    Launch = 'Launch',
    FileWait = 'FileWait',
    FileReceiveEnd = 'FileReceiveEnd',
    Terminal = 'Terminal',
    TerminalResize = 'TerminalResize',
    ProcessEnd = 'ProcessEnd',
    File = 'File',
    RequestFile = 'RequestFile',
    WaitReceive = 'WaitReceive',
    LaunchModel = 'LaunchModel'

}

export enum SocketReceiveMode {
    JSON,
    FILE
}