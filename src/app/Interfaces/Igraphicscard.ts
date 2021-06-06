export interface IGraphicsCard{
    Id:Number,
    Name:String,
    GPU:String,
    CoreCount:Number,
    CoreClockSpeed:Number,
    MemoryType:String,
    MemorySize:Number,
    MemoryBandwidth:Number,
    MotherBoardInterface:Number,
    ThermalDesignPower:Number,
    PowerConnectors:String[],
    VideoOutputPorts:String[],
    APISupport:String,
    ComputePerformance:Number,
    price: string,
    imagePath: string
}