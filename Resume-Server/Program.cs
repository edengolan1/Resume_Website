using Microsoft.EntityFrameworkCore;
using Resume.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ResumeContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("ResumeContext") ?? throw new InvalidOperationException("Connection string 'ResumeContext' not found.")));

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
app.UseCors(options => options.WithOrigins("*").AllowAnyMethod());

app.Run();
